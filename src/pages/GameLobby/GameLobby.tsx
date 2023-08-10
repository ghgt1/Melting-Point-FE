import { useParams } from 'react-router-dom';
import { StyledTitle, Description, StyledContainer, MemberContainer } from './styles';
import { useRoomStatus } from '@/apis/getRoomStatus';
import roomCharOrange from '@assets/roomCharOrange.png';
import roomCharYellow from '@assets/roomCharYellow.png';
import roomCharGreen from '@assets/roomCharGreen.png';
import roomCharBlue from '@assets/roomCharBlue.png';
import { MemberImgCard, NextBtn } from '@/components';
import { motion } from 'framer-motion';

const handleImg = (id: number) => {
  switch (id) {
    case 1:
      return roomCharBlue;
    case 2:
      return roomCharOrange;
    case 3:
      return roomCharGreen;
    case 4:
      return roomCharYellow;
    default:
      return roomCharBlue;
  }
};

export default function GameLobby() {
  const { token } = useParams();

  const { data } = useRoomStatus(token || ' ');

  const handleNextPage = () => {
    console.log('다음 페이지 이동');
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
    >
      <StyledContainer>
        <StyledTitle>다른 팀원을 기다리고 있어요</StyledTitle>
        <Description>팀원이 모두 모이면 게임이 시작됩니다</Description>
        <MemberContainer>
          {data?.userInfo.map((user) => {
            return (
              <MemberImgCard src={handleImg(user.img_id)} key={user.id} name={user.nickname} />
            );
          })}
        </MemberContainer>
        <Description>
          현재 버전에서는 최대 4명의 팀원까지
          <br /> 참여가 가능해요
        </Description>
        <NextBtn text="모두 모였어요 !" onClick={handleNextPage} />
      </StyledContainer>
    </motion.div>
  );
}