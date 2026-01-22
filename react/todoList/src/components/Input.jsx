function Input({
  width,
  height,
  checked,
  id,
  toggleChecked,
  setShowFinish,
  showFinish,
}) {
  const doToggleChecked = () => {
    toggleChecked(id);
  };

  const toggleFinish = () => {
    setShowFinish((prev) => !prev);
  };
  
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        className={`appearance-none rounded-[2px] border-[1px] ${height} ${width} cursor-pointer duration-100 peer ${
          checked ? "bg-primary border-primary" : "border-primary"
        }`}
        type="checkbox"
        checked={checked}
        onChange={width === "w-3" ? doToggleChecked : toggleFinish}
      />
      <div
        className={`absolute inset-0 flex items-center justify-center opacity-0 peer-checked:opacity-100`}
      >
        <svg
          className={`${width, height} text-white`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
    </label>
  );
}

export default Input;
