import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.net.*;
import java.io.*;
import java.util.Base64;

// AES Utility Class for Encryption/Decryption
class AESUtil {
    private static SecretKey secretKey;

    static {
        try {
            KeyGenerator keyGen = KeyGenerator.getInstance("AES");
            keyGen.init(128);
            secretKey = keyGen.generateKey();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String encrypt(String strToEncrypt) throws Exception {
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        return Base64.getEncoder().encodeToString(cipher.doFinal(strToEncrypt.getBytes("UTF-8")));
    }

    public static String decrypt(String strToDecrypt) throws Exception {
        if (strToDecrypt == null || strToDecrypt.isEmpty()) {
            return ""; // Return empty string instead of crashing
        }
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.DECRYPT_MODE, secretKey);
        return new String(cipher.doFinal(Base64.getDecoder().decode(strToDecrypt)));
    }
}

// Chat Server
class ChatServer {
    public static void main(String[] args) {
        try (ServerSocket serverSocket = new ServerSocket(5000)) {
            System.out.println("Server started. Waiting for clients...");
            while (true) {
                Socket socket = serverSocket.accept();
                System.out.println("Client connected: " + socket);
                new ClientHandler(socket).start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Handles client connections
class ClientHandler extends Thread {
    private Socket socket;
    private BufferedReader in;
    private PrintWriter out;

    public ClientHandler(Socket socket) {
        this.socket = socket;
        try {
            in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            out = new PrintWriter(socket.getOutputStream(), true);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public void run() {
        try {
            String encryptedMessage;
            while ((encryptedMessage = in.readLine()) != null) {
                if (encryptedMessage.trim().isEmpty()) continue; // Skip empty messages
                String decryptedMessage = AESUtil.decrypt(encryptedMessage);
                System.out.println("Client: " + decryptedMessage);
                out.println(AESUtil.encrypt("Message received: " + decryptedMessage));
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                socket.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}

