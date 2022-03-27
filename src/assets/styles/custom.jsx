export const customStyles = {
  option: (provided, state) => ({
    ...provided,

    background: state.isSelected ? "hsl(14, 64%, 54%)" : "hsl(355,13%,20%)",
    color: state.isSelected ? "hsl(70, 6%, 79%)" : "black",
    paddingLeft: 10,
    width: "445px",
  }),
  control: () => ({
    // none of react-select's styles are passed to <Control />
    width: 450,
    height: 60,
    border: "1px solid hsl(39, 96%, 65%)",
    borderRadius: "5px",
    background: "hsl(355,13%,20%)",
    display: "flex",
    color: "red",
  }),
  menu: () => ({
    width: 450,
    border: "1px solid hsl(39, 96%, 65%)",
    borderRadius: "5px",
    background: "hsl(355,13%,20%)",
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 1 : 1
    const transition = "opacity 300ms"

    return { ...provided, opacity, transition }
  },
}
