import '../style.css';
import PropTypes from 'prop-types';


export const Right = (props) => {

    const { oneCost, dailyCost, weeklyCost, yearlyCost, tenYearCost } = props;

    return (

        <div className="grid grid-cols-2">
            <div>
                <div className="h-12">
                    <h3>計算結果</h3>
                </div>
                <div className="h-12">
                    <p>1本あたりのコスト：</p>
                </div>
                <div className="h-12">
                    <p>1日のコスト：</p>
                </div>
                <div className="h-12">
                    <p>1週間のコスト：</p>
                </div>
                <div className="h-12">
                    <p>1年間のコスト：</p>
                </div>
                <div className="h-12">
                    <p>10年間のコスト：</p>
                </div>
            </div>

            <div>
                <div className="h-12">
                </div>
                <div className="h-12">
                    <p><input
                    className="results-input w-20 text-white"
                    value={oneCost}
                    /><span>円</span></p>
                </div>
                <div className="h-12">
                    <p><input
                    className="results-input w-20 text-white"
                    value={dailyCost}
                    /><span>円</span></p>
                </div>
                <div className="h-12">
                    <p><input
                    className="results-input w-20 text-white"
                    value={weeklyCost}
                    /><span>円</span></p>
                </div>
                <div className="h-12">
                    <p><input
                    className="results-input w-20 text-white"
                    value={yearlyCost}
                    /><span>円</span></p>
                </div>
                <div className="h-12">
                    <p><input
                    className="results-input w-20 text-white"
                    value={tenYearCost}
                    /><span>円</span></p>
                </div>
            </div>

        </div>
  
    );
  };


Right.propTypes = {
    oneCost: PropTypes.number.isRequired,
    dailyCost: PropTypes.number.isRequired,
    weeklyCost: PropTypes.number.isRequired,
    yearlyCost: PropTypes.number.isRequired,
    tenYearCost: PropTypes.number.isRequired,
};