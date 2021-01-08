import { useState, FC, useCallback, useRef, FormEvent, memo, useEffect } from 'react';

type Item = {
  value: string,
  id: string
}

const Item: FC<{ item: Item, onEdit: (item: Item) => void }> = ({ item, onEdit }) => {
  const [editable, setEditable] = useState(false);

  const onClick = useCallback(() => {
    if (!editable) {
      setEditable(true)
    }
  }, [editable])

  useEffect(() => {
    console.log(`ITEM EFFECTED: ${item.value}`)
  }, [item]);



  const onInputConfirm = (value: string) => {
    setEditable(false);
    onEdit({ ...item, value })
  };

  return <li onClick={onClick}>
    {
      editable
        ? <input autoFocus={true} defaultValue={item.value} onBlur={e => onInputConfirm(e.target.value)}/>
        : item.value
    }
  </li>
};

export const Items = () => {
  const [items, setItems] = useState<Array<Item>>([]);
  const [toggle, setToggle] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddItem = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) {
      return;
    }
    
    const value = inputRef.current.value;

    if (value) {
      const newItem: Item = {
        value,
        id: Math.random().toString() 
      }
      const newItems = [newItem, ...items];
      setItems(newItems);
      inputRef.current.value = ''; 
    }
  }, [items]);

  const onEditItem = (updItem: Item) => {
    const updItems = items.map(i => i.id === updItem.id ? updItem : i);
    setItems(updItems);
  };

  return <div>
    <button onClick={() => setToggle(!toggle)}>toggle: {toggle ? 'on' : 'off'}</button>
    <form onSubmit={onAddItem}>
      <input ref={inputRef}/>
      <button type="submit">add</button>
    </form>
    <ul>
      {
        items.map(i => <Item key={i.id} item={i} onEdit={onEditItem}/>)
      }
    </ul>
  </div>
}