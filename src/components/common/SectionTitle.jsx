export default function SectionTitle({ title }) {
  return (
    <div className="text-center after:content-[''] after:block after:w-12 after:h-1 after:bg-[#D9D9D9] after:mx-auto after:mt-2 after:rounded">
      <h3 className="text-2xl">{title}</h3>
    </div>
  );
}
