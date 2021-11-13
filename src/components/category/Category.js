const Category = (props) => {
    const { balance } = props;
    return (
        <div className="category grid col-2">
            <div className="span-2">
                <h3>Categorias</h3>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246__340.jpg" />
                <h3>Comidas rapidas</h3>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2018/03/31/07/43/bread-3277473__340.jpg" />
                <h3>Bebidas</h3>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/12/20/21/43/orange-1921548_960_720.jpg" />
                <h3>Almuerzo</h3>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490_960_720.jpg" />
                <h3>Desayunos</h3>
            </div>
        </div>
    );
};

export default Category;
