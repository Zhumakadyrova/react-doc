function GreenLink(props) {
  return (
      <a className= "greenLink" href={props.to}>
        {props.children}
      </a>

  );
}
export default GreenLink;
