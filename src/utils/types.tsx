export type CardProps = {
    id: number;
    title: string;
    content: string;
    name: string;
    image: string;
    age: number;
    location: string;
    gender: string;
    decision: string;
    isModalOpen: boolean;
    profession: string;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };