import React from "react";

function Footer() {
  let Currentyear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {Currentyear}</p>
    </footer>
  );
}

export default Footer;
