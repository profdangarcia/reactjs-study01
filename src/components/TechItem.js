import React from 'react';
import PropTypes from 'prop-types';

function TechItem( {tech, onDelete } ) {
  return (
    <li>
      {tech}
      <button onClick={ onDelete } type='button'>Remover</button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: 'Oculto',
};

//propTypes minusculo é a propriedade do componente
TechItem.propTypes = {
  //PropTypes maiusculo foi o que importamos
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;