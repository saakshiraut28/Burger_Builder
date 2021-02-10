import React, {Component} from 'react';
import './Burgerstyle.css';


export default class Burger extends Component{
    state = {
        salad: 0,
        tomatoes: 0,
        cheeseslice: 0,
        meatball: 0,
    }

    addRemIng = (action, IngredientName) =>{
        let {
            salad,
            tomatoes,
            cheeseslice,
            meatball
        } = this.state;

        let stateValue;

        switch(IngredientName) {
            case 'salad':{
                stateValue = salad;
                break;
            }
            case 'tomatoes':{
                stateValue = tomatoes;
                break;
            }
            case 'cheeseslice':{
                stateValue = cheeseslice;
                break;
            }
            case 'meatball':{
                stateValue = meatball;
                break;
            }
            default: break;
        }
        
        if (action === 'add'){
            stateValue = stateValue +1;
        }else{
            stateValue = stateValue -1;
        }

        this.setState({
            [IngredientName]: stateValue >= 0 ? stateValue : 0
        });
    }
    
    burgerContent = ()=>{
        let {
            salad,
            tomatoes,
            cheeseslice,
            meatball
        } = this.state;

        let burger = [];

        for(let i=0;i<salad; i++){
            burger.push(<div key={burger.length} className="saladadd"></div>)
        }
        for(let i=0;i<tomatoes; i++){
            burger.push(<div key={burger.length} className="tomatoesadd"></div>)
        }
        for(let i=0;i<cheeseslice; i++){
            burger.push(<div key={burger.length} className="cheeseadd"></div>)
        }
        for(let i=0;i<meatball; i++){
            burger.push(<div key={burger.length} className="meatadd"></div>)
        }
        return burger;
    }
    render(){
        return(
            <>
            <div className="burgerIngredients">
                <div className='topbun'>
                </div>
                {this.burgerContent()}
                <div className="bottombun">
                </div>
            </div>
            <div className="ingredientsQty">
                <p>Salad</p>
                <div className="ingBtns">
                    <button className="ingBtn" onClick={()=>this.addRemIng('add','salad')}>
                        Add
                    </button>
                    <button className="ingBtn" onClick={()=>this.addRemIng('remove','salad')}>
                        Remove
                    </button>
                </div>
                <p>Tomatoes</p>
                <div className="ingBtns">
                    <button className="ingBtn" onClick={()=>this.addRemIng('add','tomatoes')}>
                        Add
                    </button>
                    <button className="ingBtn" onClick={()=>this.addRemIng('remove','tomatoes')}>
                        Remove
                    </button>
                </div>
                <p>Cheese</p>
                <div className="ingBtns">
                    <button className="ingBtn" onClick={()=>this.addRemIng('add','cheeseslice')}>
                        Add
                    </button>
                    <button className="ingBtn" onClick={()=>this.addRemIng('remove','cheeseslice')}>
                        Remove
                    </button>
                </div>
                <p>Meatball</p>
                <div className="ingBtns">
                    <button className="ingBtn" onClick={()=>this.addRemIng('add','meatball')}>
                        Add
                    </button>
                    <button className="ingBtn" onClick={()=>this.addRemIng('remove','meatball')}>
                        Remove
                    </button>
                </div>
            </div>
            </>
        );
    }
}