import Footer from "../components/footer/footer";
import SchedulePage from "../components/schedule/SchedulePage";
export default function schedule(props) {
  return (
    <>
      <SchedulePage
        schedule={props.schedule}


      />

    </>
  );
}
export const getServerSideProps = async () => {
  const scheduleResponse = await fetch(
    "https://bittersweet-painted-willow.glitch.me/schedule"
  );
  const schedule = await scheduleResponse.json();
   

  

  return {
    props: {
    
      schedule,
    },

  };
};
