import { Chessboard } from "react-chessboard";
import {styled} from "@mui/material/styles";

const ChessboardContainer = styled('div')({
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: 'min(70vh, 70vw)',
    height: 'min(70vh, 70vw)',
})

const params = {
    "boardOrientation":"black",
}

const ChessboardComponent = () => {
  return (
    <ChessboardContainer >
      <Chessboard id="BasicBoard" {...params}/>
    </ChessboardContainer>
  );
}

export default ChessboardComponent;