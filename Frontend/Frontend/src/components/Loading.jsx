
import './styles/loading.css';
import lodingIcon from '../assets/loading.png'
const Loading = () => {
    return (
        <div className="loading-container absolute top-0">
            <div className=" flex items-center justify-center h-screen w-screen fixed inset-0 backdrop-blur-md bg-slate-500 opacity-30 z-50">
                <div className="loading-logo opacity-100">
                    <img src={lodingIcon} alt="Loading..." className="w-24 h-auto animate-spin" />
                </div>
            </div>
        </div>
    );
};

export default Loading;
