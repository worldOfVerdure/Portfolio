export default function ParagraphSplitter ({ mapKey, paragraphs }) {
  return (
    <>
      {paragraphs.map((paragraph, i) => {
        const uniqueMapKey = `${mapKey} ${i}`;
        return <p key={uniqueMapKey} >{paragraph}</p>;
      })}
    </>
  );
}
