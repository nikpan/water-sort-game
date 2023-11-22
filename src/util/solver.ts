import TubeSet from "../state/tubeSet";

const solve = (tubeSet: TubeSet) => {
  /**
   * stacks[] of size N
   * Initial State [[top_1, size_1], [top_2, size_2]...]
   * if(sorted) return true
   * if(state.reached) return false
   * current_state.reached = true
   * for(i in N)
   *  for(j in N)
   *    if(can merge(i,j))
   *      countPops = min(4-j.size, count of top i)
   *      i.pop() x countPops
   *      j.push() x countPops
   *      path.push(i,j,countPops)
   *      if(solve())
   *        return true
   *      else
   *        path.pop()
   *        i.push() x countPops
   *        j.pop() x countPops
   * return false
   *    
   */
}