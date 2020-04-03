import React from 'react';
import { Link } from 'gatsby';

const RegList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.regulations.map((value, index) => {
          return (
            <li key={index}>
              <Link to={`/${value.regulation.partNumber}`}>
                {value.regulation.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RegList;
