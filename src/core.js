'use strict';

import {List, Map} from 'immutable';

/**
 * [setEntries description]
 * @param {[type]} state   [description]
 * @param {[type]} entries [description]
 */
export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

/**
 * [next description]
 * @param  {[type]}   state [description]
 * @return {Function}       [description]
 */
export function next(state) {
  const entries = state.get('entries').concat(getWinners(state.get('vote')));
  return state.merge({
    vote: Map({pair: entries.take(2)}),
    entries: entries.skip(2)
  });
} 

/**
 * [vote description]
 * @param  {[type]} state [description]
 * @param  {[type]} entry [description]
 * @return {[type]}       [description]
 */
export function vote(state, entry) {
  return state.updateIn(
    ['vote', 'tally', entry],
    0,
    tally => tally + 1
  );
}

/**
 * [getWinners description]
 * @param  {[type]} vote [description]
 * @return {[type]}      [description]
 */
export function getWinners(vote) {
  if (!vote) return [];
  const [a, b] = vote.get('pair');
  const aVotes = vote.getIn(['tally', a], 0);
  const bVotes = vote.getIn(['tally', b], 0);
  if      (aVotes > bVotes)  return [a];
  else if (aVotes < bVotes)  return [b];
  else                       return [a, b];
}
