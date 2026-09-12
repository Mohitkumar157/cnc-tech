
export default function ServiceCard({title , description , icon}) {
  return (
    <article data-animate ="child-fade-up" className="h-full flex flex-col gap-3 items-center rounded-md bg-white p-4 py-6 text-center shadow-sm">
       
        {icon}
      <h3 className="font-inter font-semibold text-black leading-5">
        {title}
      </h3>

      <p className="text-[14px] font-inter leading-5 text-slate-600">
        {description}
      </p>

      
    </article>
  );
}