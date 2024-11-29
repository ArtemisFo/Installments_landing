import Skeleton from "@components/ui/forms/Skeleton.tsx";

interface Props {
  count?: number;
}

function ProductListSkeleton(props: Props) {
  const { count = 15 } = props;

  return Array(count)
    .fill(true)
    .map((_, idx) => <ProductItemSkeleton key={idx} />);
}

function ProductItemSkeleton() {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton height={120} />
      <Skeleton height={15} className="!rounded-none" />
      <Skeleton height={15} className="!rounded-none" />
    </div>
  );
}

export default ProductListSkeleton;
