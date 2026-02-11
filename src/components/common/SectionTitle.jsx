export default function SectionTitle({ title }) {
  return (
    <div>
      <h3 className="text-center after:content-[''] after:block after:w-12 after:h-1 after:bg-linear-to-r after:from-purple-500 after:to-pink-500 after:mx-auto after:mt-2 after:rounded">
        {title}
      </h3>
    </div>
  );
}
