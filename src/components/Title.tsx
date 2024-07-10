type HeadlineType = {
  headline: string
};

function Title({ headline }: HeadlineType) {
  return (
    <h2 className="title">
      {' '}
      {headline}
      {' '}
    </h2>
  );
}

export default Title;
