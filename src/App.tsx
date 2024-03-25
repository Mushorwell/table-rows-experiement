import { FC, useState } from 'react';

import './style.css';

interface IProduct {
  company: string;
  contact: string;
  country: string;
  number: string;
  description: string;
}

export const App: FC<{ name: string }> = ({ name }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const handleInputChange = (
    rowIndex: number,
    currentProduct: IProduct,
    e: React.FormEvent<HTMLInputElement>
  ) => {
    setProducts((prev) => {
      const {name, value} = e.target;
      const activeItem = { ...currentProduct, [name]: value };
      return prev.map((item, idx) => idx === rowIndex ? item = activeItem: item);
    });
  };
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() =>
          setProducts((prev) => {
            console.log(prev);
            return [
              ...prev,
              {
                company: 'Alfreds Futterkiste',
                contact: 'Maria Anders',
                country: 'Germany',
                number: '0',
                description: 'Something placeholder here',
              },
            ];
          })
        }
      >
        ADD ROW
      </button>
      <button
        onClick={() =>
          setProducts((prev) => {
            const arr = [...prev];
            arr.pop();
            console.log(arr);
            return arr;
          })
        }
      >
        DELETE ROW
      </button>
      <table>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>Number</th>
          <th>Description</th>
        </tr>
        {products.map((item: IProduct, idx) => (
          <tr key={JSON.stringify(idx)}>
            <td>
              <input
                type="text"
                name="company"
                value={item.company}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  handleInputChange(idx, item, e)
                }
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="contact"
                value={item.contact}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  handleInputChange(idx, item, e)
                }
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="country"
                value={item.country}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  handleInputChange(idx, item, e)
                }
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="number"
                value={item.number}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  handleInputChange(idx, item, e)
                }
              ></input>
            </td>
            <td>
              <input
                type="text"
                name="description"
                value={item.description}
                onChange={(e: React.FormEvent<HTMLInputElement>) =>
                  handleInputChange(idx, item, e)
                }
              ></input>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};
