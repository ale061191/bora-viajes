import React from "react";
import styled from "styled-components";

interface RatingStarsProps {
    rating: number;
    maxRating?: number;
    size?: number;
    showNumber?: boolean;
}

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const Star = styled.span<{ $filled: number }>`
  color: ${props => props.$filled > 0 ? '#FFD700' : '#E0E0E0'};
  font-size: ${props => props.theme?.size || '1.2rem'};
  position: relative;
  display: inline-block;
  
  &::before {
    content: '★';
  }
  
  ${props => props.$filled > 0 && props.$filled < 1 && `
    &::after {
      content: '★';
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      width: ${props.$filled * 100}%;
      color: #FFD700;
    }
  `}
`;

const RatingNumber = styled.span`
  font-weight: 600;
  color: var(--color-text-dark);
  margin-left: 0.25rem;
  font-size: 0.95rem;
`;

const RatingStars: React.FC<RatingStarsProps> = ({
    rating,
    maxRating = 5,
    size = 1.2,
    showNumber = false
}) => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
        const filled = Math.min(Math.max(rating - (i - 1), 0), 1);
        stars.push(
            <Star
                key={i}
                $filled={filled}
                theme={{ size: `${size}rem` }}
            />
        );
    }

    return (
        <StarsContainer>
            {stars}
            {showNumber && <RatingNumber>{rating.toFixed(1)}</RatingNumber>}
        </StarsContainer>
    );
};

export default RatingStars;
