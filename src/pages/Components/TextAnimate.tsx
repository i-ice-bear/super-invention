export function TextAnimate({ text }: any) {
  const word = text.split(" ");
  return (
    <>
      {word.map((letter: any, index: any) => {
        return (
          <>
            <span key={index} style={{ marginRight: "5px" }}></span>
          </>
        );
      })}
    </>
  );
}
