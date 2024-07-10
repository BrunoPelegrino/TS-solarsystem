type HeadlineType = {
  headline: string
};

function Title({ headline }: HeadlineType) {
  return (
    <h2>
      {' '}
      {headline}
      {' '}
    </h2>
  );
}

export default Title;
