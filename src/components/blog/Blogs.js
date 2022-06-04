import React, {useState,useEffect} from 'react';
import axios from "axios";

import Lists from '../List';
import SearchBar from '../SearchBar';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [users, setUsers] = useState([]);
    const [store, setStore] = useState([]);

    const getBlogs = () => {
        axios
        .get('http://localhost:4000/blogs')
        .then((response) => {
            // console.log(response.data.blogs[0])
            // setBlogs(response.data.blogs[0])
          const newData = response.data.blogs.map((result) => ({
            name: `${result.name}`,
            id: result.id
          }));
          setBlogs(newData);
          // setStore(newData);
        })
        .catch((error) => {
          console.log(error);
        });
    }
     
    const getUsers = () => {
        axios
          .get("https://randomuser.me/api/?results=10&inc=name,registered&nat=fr")
          .then((response) => {
            const newData = response.data.results.map((result) => ({
              name: `${result.name.first} ${result.name.last}`,
              id: result.registered
            }));
            setUsers(newData);
            // setStore(newData);
          })
          .catch((error) => {
            console.log(error);
          });
      };

    const filterNames = (event) => {
      const filteredData = store.filter((item) =>
          item.name.toLowerCase().includes(event.target.value.toLowerCase())
      );
      setUsers(filteredData);
    };
     
    useEffect(() => {
      getUsers();
      getBlogs();
    }, []);
   
    return (
        <div className="page">
            <div>NAME LIST</div>
            <SearchBar searchFunction={filterNames} />
            <Lists usernames={users} />
            <Lists usernames={blogs} />
        </div>
    );
}

export default Blogs