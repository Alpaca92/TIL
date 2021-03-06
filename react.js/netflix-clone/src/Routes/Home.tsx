import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { makeImagePath } from "../utils";
import { AnimatePresence, motion, useViewportScroll } from "framer-motion";
import { useState } from "react";
import { useNavigate, useMatch } from "react-router-dom";

interface bgphoto {
  bgphoto: string;
}

const Wrapper = styled.div`
  background-color: #000;
`;

const Banner = styled.div<bgphoto>`
  height: 100vh;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${(props) => props.bgphoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Loader = styled.div`
  margin-top: 80px;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  width: 100%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  margin-bottom: 5px;
  position: absolute;
`;

const Box = styled(motion.div)<bgphoto>`
  height: 200px;
  background-image: url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
  color: red;
  font-size: 20px;
  cursor: pointer;

  &:first-child {
    transform-origin: center left;
  }

  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  position: absolute;
  width: 100%;
  bottom: 0;
  opacity: 0;

  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

const BigMovie = styled(motion.div)<{ scrolly: number }>`
  position: absolute;
  width: 40vw;
  height: 80vh;
  top: ${(props) => props.scrolly + 200}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 5px;
  background-color: ${(props) => props.theme.black.lighter};
`;

const BigCover = styled.div`
  width: 100%;
  height: 400px;
  background-position: center center;
  background-size: cover;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  text-align: center;
  font-size: 36px;
  margin-top: 10px;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 5,
  },
};

const boxVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
};

function Home() {
  const offset = 6;
  const { scrollY } = useViewportScroll();
  const bigMovieMatch = useMatch("/movies/:movieId");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const [index, setIndex] = useState(0);
  const increaseIndex = () => {
    if (data) {
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;

      if (leaving) return;
      setLeaving(true);

      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const onBoxClicked = (movieId: number) => {
    navigate(`/movies/${movieId}`);
  };
  const onOverlayCLick = () => {
    navigate("/");
  };
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id === +(bigMovieMatch.params.movieId || 0)
    );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading... </Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                transition={{ type: "tween", duration: 1 }}
                exit="exit"
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                      key={movie.id}
                      bgphoto={makeImagePath(movie.backdrop_path, "w500")}
                      onClick={() => {
                        onBoxClicked(movie.id);
                      }}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayCLick}
                  exit={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
                <BigMovie
                  scrolly={scrollY.get()}
                  layoutId={bigMovieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `url(${makeImagePath(
                            clickedMovie.backdrop_path
                          )}
                          )`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
