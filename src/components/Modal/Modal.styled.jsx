import styled from '@emotion/styled';

export const ModalContact = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  background-color: white;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: 5px;
  background-color: rgba(192, 181, 201, 0.952);
  box-shadow: 0 2px 39px rgba(0, 0, 0, 1.2);
`;

export const WrapDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 50px;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 5%;
  left: 87%;
  border-radius: 10px;
  cursor: pointer;
  background-color: #db6d69;
  padding: 5px;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: red;
  }
`;

export const ButtonDelete = styled.button`
  border-radius: 10px;
  cursor: pointer;
  background-color: #db6d69;
  padding: 5px;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  margin-top: 30px;

  :hover {
    background-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: red;
  }
`;

export const TextName = styled.p`
  font-size: 16px;
  border: 1px solid #d1cece;
  padding: 10px;
  background-color: #d1cece;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const TextPhone = styled.p`
  font-size: 16px;
  margin: 20px 0 20px 0;
  border: 1px solid #d1cece;
  padding: 10px;
  background-color: #d1cece;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
export const TextAdderess = styled.p`
  font-size: 16px;
  border: 1px solid #d1cece;
  padding: 10px;
  background-color: #d1cece;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const IMG = styled.img`
  width: 180px;
`;
