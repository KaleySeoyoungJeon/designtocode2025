import { useState } from 'react';
import './Card_28022025.scss'

function Card_2802025 () {

    const cardData = [
        { id: 1, title: 'Lesson 1.', type: 'yellow', content: 'Until you make the unconscious conscious, it will direct your life and you will call it fate.' },
        { id: 2, title: 'Lesson 2.', type: 'red', content: 'I am not what happened to me, I am what I choose to become.' },
        { id: 3, title: 'Lesson 3.', type: 'green',content: 'Everything that irritates us about others can lead us to an understanding of ourselves.' },
        { id: 4, title: 'Lesson 4.', type: 'blue', content: 'The privilege of a lifetime is to become who you truly are.' },
        { id: 5, title: 'Lesson 5.', type: 'pink', content: 'The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.' },
        { id: 6, title: 'Lesson 6.', type: 'purple',content: 'A dream that is not understood remains a mere occurrence; understood, it becomes a living experience.' }
    ];

    const [expandedId, setExpandedId] = useState(null);

    const toggleCard = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    const getRowIndex = (index) => Math.floor(index / 2);

    return (
        <div className='card'>
            <div className="card__top">
                <p className="card__top--text">❋</p>
                <p className="card__top--text">C.G Jung’s quotes to guid your path</p>
            </div>
            <div className='card__wrapper'>
                {cardData.map((card, index) => {
                    const isExpanded = expandedId === card.id;

                    const rowIndex = getRowIndex(index);
                    const cardsInSameRow = cardData.filter((_, i) => getRowIndex(i) === rowIndex);
                    const anyCardInRowExpanded = cardsInSameRow.some(c => c.id === expandedId);

                    const shouldShow = isExpanded || !anyCardInRowExpanded;

                    if (!shouldShow) return null;

                    return (
                        <div    
                            key={card.id}
                            className={`card__single ${card.type} ${isExpanded ? 'expanded' : ''}`}
                            onClick={() => toggleCard(card.id)}
                        >
                            <div className='card__single--header'>
                                <h3 className='card__single--title'>{card.title}</h3>
                                {isExpanded && (
                                    <button 
                                        className={`close-button ${card.type}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setExpandedId(null);
                                        }}
                                    >
                                    x
                                    </button>
                                )}
                            </div>
                            <p className="card__single--content">{card.content}</p>
                        </div>
                    );
                })}
            </div>
        <div className="footer">
            <div className="footer--date">
                <p className='footer-text'>✱</p>
                <p className='footer-text'>28 February 2025</p>
            </div>
            <div className="visual__footer--name">
                <p className='footer-text'>Visual practice 2</p>
            </div>
        </div>
    </div>
    );
};

export default Card_2802025;