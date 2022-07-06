package de.fhg.iais.roberta.syntax.sensors.arduino.nano33blesense;

import de.fhg.iais.roberta.syntax.lang.expr.Expr;
import de.fhg.iais.roberta.syntax.sensor.BuiltinSensor;
import de.fhg.iais.roberta.transformer.forClass.NepoExpr;
import de.fhg.iais.roberta.transformer.forField.NepoValue;
import de.fhg.iais.roberta.typecheck.BlocklyType;
import de.fhg.iais.roberta.util.ast.BlocklyProperties;

@NepoExpr(name = "APDS9960_DISTANCE", category = "SENSOR", blocklyNames = {"robsensors_apds9960_distance_getDataAvailableSample"})
public final class Apds9960DistanceSensor<V> extends BuiltinSensor<V> {
    @NepoValue(name = "VARIABLE_VALUE", type = BlocklyType.NUMBER)
    public final Expr<V> distance;

    public Apds9960DistanceSensor(BlocklyProperties properties, Expr<V> distance) {
        super(properties, null);
        this.distance = distance;
        setReadOnly();
    }

}