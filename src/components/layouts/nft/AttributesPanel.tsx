interface Props {
  attributes: {
    value: string;
    trait_type: string;
  }[];
}

export default function AttributesPanel({ attributes }: Props) {
  return (
    <div className='md:4/5 flex flex-wrap justify-center gap-1 md:justify-start md:gap-2 lg:w-3/5'>
      {attributes.map((attribute, i) => (
        <div key={i} className='rounded-lg bg-card p-2 text-xs'>
          <p className='text-xs text-gray-500'>
            {attribute.trait_type.toUpperCase()}
          </p>
          <p className='text-sm text-gray-700'>
            {attribute.value.toUpperCase()}
          </p>
        </div>
      ))}
    </div>
  );
}
