function getAcceleration(obj) {
    // If both force (f) and mass (m) are available
    if (obj.f !== undefined && obj.m !== undefined) {
      return obj.f / obj.m;
    }
    
    // If change in velocity (Δv) and time (Δt) are available
    if (obj.Δv !== undefined && obj.Δt !== undefined) {
      return obj.Δv / obj.Δt;
    }
    
    // If distance (d) and time (t) are available
    if (obj.d !== undefined && obj.t !== undefined) {
      return (2 * obj.d) / (obj.t ** 2);
    }
    
    // If none of the conditions are met
    return "impossible";
}