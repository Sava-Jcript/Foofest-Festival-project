import BandSingleView from "../../components/band-single-view/BandSingleView";

function singleBandPage(props) {
  return (
    <>
      <BandSingleView

        bandName={props.data.name}
        genre={props.data.genre}
        description={props.data.bio}
        members={props.data.members}
        slug={props.slug}
        logo={props.data.logo}
        credits={props.data.logoCredits}
      />
    </>
  );
}
export async function getServerSideProps(context) {

  
  const slug = context.params.slug;
  const res = await fetch("https://bittersweet-painted-willow.glitch.me/bands");
  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }
  const data = await res.json();
  const band = data.filter((entry) => entry.slug === slug);


  return {
    props: {
      data: band[0],
      slug: slug,
    },
  };
}

export default singleBandPage;
