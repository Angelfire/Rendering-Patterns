import { useState } from "preact/hooks";

export function SocialButtons() {
  const [count, setCount] = useState(0);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div>{count} people liked this post</div>
      <div align="right">
        <Image src="/like.png" width="32" height="32" onclick={add} />
        <Image src="/unlike.png" width="32" height="32" onclick={subtract} />
      </div>
    </>
  );
}
