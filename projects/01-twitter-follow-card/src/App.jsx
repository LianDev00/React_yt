// import { useState } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  //const format = (userName) => `@${userName}`;

  //const formattedUserName = <span>@Liandev</span>;

  //const apple = { isFollowing: true, userName: "Apple" };
  //const mcrsft = { isFollowing: false, userName: "Microsoft" };

  //const [name,setName] = useState('Apple')

  //const [isFollowing, setIsFollowing] = useState(false);

  //console.log("[App] render with userName:", isFollowing);

  return (
    <section className="App">
      {/* <TwitterFollowCard userName="Apple" initialIsFollowing={isFollowing}> */}

      <TwitterFollowCard userName="Apple">
        Apple
      </TwitterFollowCard>

      <TwitterFollowCard userName="Google">
        Google
      </TwitterFollowCard>

      <TwitterFollowCard userName="IBM">
        IBM
      </TwitterFollowCard>

      <TwitterFollowCard userName="Intel">
        Intel
      </TwitterFollowCard>

      <TwitterFollowCard userName="Amd">
        AMD
      </TwitterFollowCard>

      <TwitterFollowCard userName="Microsoft">
        Microsoft
      </TwitterFollowCard>

      {/* <button onClick={() => setName('X')}>Cambio nombre</button> */}

      {/* <button onClick={() => setIsFollowing(!isFollowing)}>Cambiar estado de App</button> */}
    </section>
  );
}
