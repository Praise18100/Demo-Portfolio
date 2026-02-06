import "./portfoliolist.scss";

type PortfoliolistProps = {
  id: string;
  title: string;
  active: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
};

export default function Portfoliolist({
  id,
  title,
  active,
  setSelected,
}: PortfoliolistProps) {
  return (
    <li
      className={active ? "portfoliolist active" : "portfoliolist"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
