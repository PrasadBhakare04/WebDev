import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.Socket;
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import java.net.*;
import java.io.*;
import java.util.Base64;

// Chat Client
class ChatClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 5000);
             BufferedReader consoleInput = new BufferedReader(new InputStreamReader(System.in));
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {

            System.out.println("Connected to server. Type messages:");
            String userInput;
            while ((userInput = consoleInput.readLine()) != null) {
                if (userInput.trim().isEmpty()) continue; // Skip empty inputs
                String encryptedMessage = AESUtil.encrypt(userInput);
                out.println(encryptedMessage);
                System.out.println("Server: " + AESUtil.decrypt(in.readLine()));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}