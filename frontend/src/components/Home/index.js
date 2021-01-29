import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGroups } from "../../store/group";
import CreateGroupForm from "../CreateGroup";
import "./Home.css";

function Home() {
  const dispatch = useDispatch();
  const groups = useSelector((state) => {
    return Object.values(state.group);
  });

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  // console.log(groups);
  // const groupsTest = [
  //   {
  //     id: 1,
  //     name: "Full Metal Racquets",
  //   },
  //   {
  //     id: 2,
  //     name: "Clay Miserables",
  //   },
  // ];

  return (
    <div>
      <CreateGroupForm />
      {/* {groupsTest.map((group) => {
        return <p>{group.name}</p>;
      })} */}
      <h1 className="groups_title">Groups</h1>
      <div className="groups_container">
        {groups.map((group) => {
          return (
            <div className="group_container">
              <div className="group_container__name">
                <h2 key={group.name}>{group.name}</h2>
              </div>
              <div className="group_container__location_creator">
                <h3>{group.User.username}</h3>
                <h3>
                  {group.Location.city}, {group.Location.state}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;