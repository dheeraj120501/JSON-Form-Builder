function Slot(props: { children: JSX.Element }) {
  return (
    <div className="py-4 px-4 bg-slot border-placeholder border-[1px] rounded-lg my-4">
      {props.children}
    </div>
  );
}

export default Slot;
