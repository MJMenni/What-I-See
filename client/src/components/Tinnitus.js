import styled from "styled-components";

const tinType = [
  "Static",
  "Roaring",
  "Buzzing",
  "Screeching",
  "Kettle",
  "Electric",
];

const Tinnitus = ({ onClickHandler }) => {
  return (
    <WrapAudio>
      <InnerWrap>
        <SymptomsLabel>TINNITUS</SymptomsLabel>

        <AudioOuterWrap>
          {tinType.map((typ) => {
            return (
              <div key={typ}>
                <TinnitusType>{typ}</TinnitusType>
                <AudioWrap>
                  <audio
                    src={`assets/${typ}.mp3`}
                    id={typ}
                    controls
                    loop
                    onPlay={(e) => {
                      onClickHandler(e);
                    }}
                    onPause={(e) => {
                      onClickHandler(e);
                    }}
                  />
                </AudioWrap>
              </div>
            );
          })}
        </AudioOuterWrap>
        <SymptomsLabel>NOTES</SymptomsLabel>
      </InnerWrap>
    </WrapAudio>
  );
};

const WrapAudio = styled.div`
  display: flex;
  max-width: 956px;
  margin-right: auto;
  margin-left: auto;
`;

const InnerWrap = styled.div`
  width: 85%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  line-height: 24px;
`;

// Symptoms label
const SymptomsLabel = styled.div`
  font-size: 20px;
  font-weight: 900;
  margin: 60px 0px 20px 60px;

  /* border: 1px green solid; */
`;

// Tinnitus section
const AudioOuterWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 85%;
  background-color: #f1f3f4;
  padding: 15px 5px 15px 35px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 5px;
  /* border: 5px yellow solid; */
`;

const TinnitusType = styled.div`
  margin-top: 25px;
  font-weight: 900;
  width: 15%;
  height: 15%;
  /* border: 1px pink solid; */
`;

const AudioWrap = styled.div`
  margin-top: -25px;
  display: flex;
  width: 43%;
  margin-left: auto;
  margin-right: auto;
  /* border: 1px green solid; */

  audio::-webkit-media-controls-current-time-display,
  audio::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  audio::-webkit-media-controls-timeline,
  video::-webkit-media-controls-timeline {
    display: none;
  }
`;

export default Tinnitus;

// Wraps
// const Wrap = styled.div`
//   display: flex;
//   max-width: 956px;
//   margin-right: auto;
//   margin-left: auto;
// `;

// // Notes section
// const NotesInput = styled.textarea`
//   border: var(--blue) 1px solid;
//   min-height: 175px;
//   width: 85%;
//   margin-right: auto;
//   margin-left: auto;
//   padding: 25px;
//   border-radius: 5px;
//   line-height: 24px;
//   font-size: 16px;
// `;

// const Dropdown = () => {
//   const initValue = {
//     Static: false,
//     Roaring: false,
//     Buzzing: false,
//     Kettle: false,
//     Electric: false,
//     Screeching: false,
//   };
//   const [audio, setAudio] = useState(initValue);

//   console.log(audio);
//   const onClickHandler = (event) => {
//     //click triggered
//     event.preventDefault();

//     //change the stat target value
//     console.log(event.target.id);
//     const key = event.target.id;
//     setAudio((prev) => {
//       return { ...prev, [key]: !prev[key] };
//     });
//   };

//   useEffect(() => {
//     console.log(audio);
//   }, [audio]);

//     <Wrap>
//       <InnerWrap>
//         <SymptomsLabel>Tinnitus</SymptomsLabel>
//         <AudioOuterWrap>
//           <TinnitusType>Static</TinnitusType>
//           <AudioWrap>
//             <audio
//               src="assets/Static.mp3"
//               id="Static"
//               controls
//               loop
//               onPlay={(e) => {
//                 onClickHandler(e);
//               }}
//               onPause={(e) => {
//                 onClickHandler(e);
//               }}
//             />
//           </AudioWrap>

//           <TinnitusType>Kettle</TinnitusType>
//           <AudioWrap>
//             <audio
//               src="assets/Kettle.mp3"
//               controls
//               id="Kettle"
//               loop
//               onPlay={(e) => {
//                 onClickHandler(e);
//               }}
//               onPause={(e) => {
//                 onClickHandler(e);
//               }}
//             />
//           </AudioWrap>
//           <TinnitusType>Roaring</TinnitusType>
//           <AudioWrap>
//             <audio
//               src="assets/Roaring.mp3"
//               controls
//               id="Roaring"
//               loop
//               onPlay={(e) => {
//                 onClickHandler(e);
//               }}
//               onPause={(e) => {
//                 onClickHandler(e);
//               }}
//             />
//           </AudioWrap>
//           <TinnitusType>Electric</TinnitusType>
//           <AudioWrap>
//             <audio
//               src="assets/Electric.mp3"
//               controls
//               id="Electric"
//               loop
//               onPlay={(e) => {
//                 onClickHandler(e);
//               }}
//               onPause={(e) => {
//                 onClickHandler(e);
//               }}
//             />
//           </AudioWrap>
//           <TinnitusType>Buzzing</TinnitusType>
//           <AudioWrap>
//             <audio
//               src="assets/Buzzing.mp3"
//               controls
//               id="Buzzing"
//               loop
//               onPlay={(e) => {
//                 onClickHandler(e);
//               }}
//               onPause={(e) => {
//                 onClickHandler(e);
//               }}
//             />
//           </AudioWrap>
//           <TinnitusType>Screeching</TinnitusType>
//           <AudioWrap>
//             <audio
//               src="assets/Screeching.mp3"
//               controls
//               id="Screeching"
//               loop
//               onPlay={(e) => {
//                 onClickHandler(e);
//               }}
//               onPause={(e) => {
//                 onClickHandler(e);
//               }}
//             />
//           </AudioWrap>
//         </AudioOuterWrap>
//         <SymptomsLabel>Notes</SymptomsLabel>
//         <NotesInput
//           placeholder="Feel free to add notes here. For example: &#10;Apr-20-2022 – Intense after-images and light sensitivity, especially when walking through the mall. Noticed static, tinnitus, and floaters increased as the day went on. Possible triggers: work-related stress, exposure to intense lighting, too much screen time."
//         ></NotesInput>
//       </InnerWrap>
//     </Wrap>
//   );
