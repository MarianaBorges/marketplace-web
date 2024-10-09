interface PageTitleProps {
  title: string;
  subTitle: string;
}

export default function PageTitle({ title, subTitle }:PageTitleProps) {
  return(
    <div>
      <h1 className="font-dmsans text-2xl font-bold">{title}</h1>
      <p className="font-poppins text-sm font-normal text-gray-300">{subTitle}</p>
    </div>
  )
}