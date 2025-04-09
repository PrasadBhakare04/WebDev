import RentingItem from './RentingItem'
export default function RentingList({List}){
    return <>
        {List.map(l => <RentingItem 
            key = {l.id}
            item = {l}
        />)}
    </>
}