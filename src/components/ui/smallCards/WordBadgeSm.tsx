import Typography from "@components/ui/forms/Typography.tsx";

interface Props {
  txt?: string;
  variant?:
    | "b1"
    | "c1"
    | "c2"
    | "c3"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "t1"
    | "s1";
}

const WordBadgeSm = (props: Props) => {
  const { txt, variant = "h2" } = props;

  return (
    <div className="px-4 flex items-center">
      <span className="hex me-1" />
      <Typography variant={variant} weight="bold">
        {txt}
      </Typography>
    </div>
  );
};

export default WordBadgeSm;
