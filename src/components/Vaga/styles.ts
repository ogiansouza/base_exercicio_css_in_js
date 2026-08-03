import styled from 'styled-components'

export const JobCard = styled.li`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`

export const JobTitle = styled.h3`
  margin-bottom: 16px;
  font-weight: bold;
`

export const DetailsList = styled.ul`
  line-height: 1.5;
`

export const ApplyLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  ${JobCard}:hover & {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`
