import '../style.css';
import PropTypes from 'prop-types';

export const Left = (props) => {
    
    const { price, box, num, onChangePrice, onChangeBox, onChangeNum, onClickCalc } = props;

    return (
  
        <div className="grid grid-cols-2">
            <div>
            <div className="h-12">              
                <h3>情報入力</h3>
            </div>
            <div className="h-12">
                <p>たぱこの値段（1箱）：</p>
            </div>
            <div className="h-12">
                <p>1箱の本数：</p>
            </div>
            <div className="h-12">
                <p>1日に吸う本数：</p>
            </div>
            </div>

            <div>  
            <form>
            <div className="h-12">
            </div>
            <div className="h-12">
                <p><input 
                className="w-12 text-black"
                type="number"
                value={price}
                onChange={onChangePrice}
                />円</p>
            </div>
            <div className="h-12">
                <p><input 
                className="w-12 text-black"
                type="number"
                value={box}
                onChange={onChangeBox}
                />本</p>
            </div>
            <div className="h-12">
                <p><input 
                className="w-12 text-black"
                type="number"
                value={num}
                onChange={onChangeNum}
                />本</p>
            </div>
            <div>
                <p>
                    <button
                        className="bg-gray-900 text-white rounded px-4 py-2"
                        onClick={onClickCalc}
                    >
                        計算
                    </button></p>
            </div>
            </form>
            </div>

        </div>

    )
}


Left.propTypes = {
    price: PropTypes.number.isRequired,
    box: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired,
    onChangePrice: PropTypes.func.isRequired,
    onChangeBox: PropTypes.func.isRequired,
    onChangeNum: PropTypes.func.isRequired,
    onClickCalc: PropTypes.func.isRequired,
};

