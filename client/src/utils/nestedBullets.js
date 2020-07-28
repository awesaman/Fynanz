import React from "react";

function nestedBullets(b) {
  if (Array.isArray(b)) {
    return <ul>{b.map((s) => nestedBullets(s))}</ul>;
  } else {
    return <li>{b}</li>;
  }
}

export default nestedBullets;
