function Box({ title, children }) {
  return (
    <div className="flex  flex-col gap-2.5 bg-stone-50 rounded-lg py-5 px-6 border-2 border-stone-200/60">
      <h1 className="font-bold text-2xl mb-3">{title}</h1>
      {children}
    </div>
  );
}

export default Box;
