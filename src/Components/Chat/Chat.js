import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { database, push, ref, onValue } from "../../server/firebase";
import { MyUserContext } from "../../App";
import { Link } from "react-router-dom";
import { child, get, set } from "firebase/database";
import Spinner from "../Spinner/Spinner";
import "./chat.css";

const Chat = ({ name }) => {
  const [inpMess, setInpMess] = useState("");
  const [messages, setMessages] = useState([]);
  const inpt = useRef();
  const [user] = useContext(MyUserContext);

  useEffect(() => {
    if (user !== null) {
      // Lưu thông tin người dùng vào Firebase
      set(ref(database, "users/" + user.id), {
        id: user.id,
        username: user.username,
        profile_picture: user.avatar,
      });

      // Truy vấn thông tin người dùng từ Firebase
      const dbRef = ref(database);
      get(child(dbRef, `users/${user.id}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    onValue(ref(database, "messages"), (data) => {
      let getMsg = [];
      data.forEach((d) => {
        const msg = d.val();
        if (msg.senderId === user?.id) {
          getMsg.push(msg);
        }
      });
      setMessages(getMsg);
    });
  }, [user]);

  const handleSendMsg = () => {
    if (user !== null) {
      // Gửi tin nhắn của người dùng hiện tại
      push(ref(database, "messages"), {
        senderId: user.id,
        message: inpMess,
      });
      setInpMess("");
      inpt.current.focus();
    }
  };

  let url = "/login?next=/chat";

  return (
    <>
      <h1 className="font-weight-bold text-center">Chat zone</h1>

      <div className="container">
        {user === null ? (
          <p>
            Vui lòng <Link to={url}>đăng nhập</Link> để chat!
          </p>
        ) : messages === null ? (
          <Spinner />
        ) : (
          messages.map(
            (msg, index) =>
              // Hiển thị tin nhắn chỉ khi người gửi là người dùng hiện tại
              msg.senderId === user.id && (
                <p key={index}>
                  <span>{user.lastName}: </span>
                  <span>{msg.message}</span>
                </p>
              )
          )
        )}

        <div>
          <input
            type="text"
            value={inpMess}
            ref={inpt}
            onChange={(e) => {
              setInpMess(e.target.value);
            }}
          />
          <Button onClick={handleSendMsg} style={{ marginRight: "5%" }}>
            Gửi
          </Button>
        </div>
      </div>
    </>
  );
};

export default Chat;
