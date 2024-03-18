export default function TodoListItem(props: {
    listItem: string,
    index: number,
    onDelete: (index: number) => void;
}) {
    const { listItem, index, onDelete } = props;

    return <>
        <div><button onClick={() => onDelete(index)}>X</button></div>
        <div>{index}</div>
        <div>{listItem}</div>
        </>
}