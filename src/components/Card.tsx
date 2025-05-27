interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}
const Card: React.FC<CardProps> = ({ children, className = "", accent = false }) => { 
    return (
    <div className={`bg-white border-4 border-gray-800 ${accent ? 'bg-orange-500 text-white' : ''} ${className}`}>
        {children}
    </div>
    )
};
export default Card;