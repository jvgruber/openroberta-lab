package de.fhg.iais.roberta.syntax.sensors.arduino.nano33blesense;

import java.util.List;

import de.fhg.iais.roberta.blockly.generated.Block;
import de.fhg.iais.roberta.blockly.generated.Value;
import de.fhg.iais.roberta.syntax.Phrase;
import de.fhg.iais.roberta.syntax.lang.expr.Expr;
import de.fhg.iais.roberta.syntax.sensor.BuiltinSensor;
import de.fhg.iais.roberta.transformer.Ast2Jaxb;
import de.fhg.iais.roberta.transformer.Jaxb2Ast;
import de.fhg.iais.roberta.transformer.Jaxb2ProgramAst;
import de.fhg.iais.roberta.transformer.forClass.NepoBasic;
import de.fhg.iais.roberta.util.ast.BlocklyProperties;
import de.fhg.iais.roberta.util.syntax.BlocklyConstants;

@NepoBasic(name = "APDS9960_COLOR", category = "SENSOR", blocklyNames = {"robsensors_apds9960_color_getDataAvailableSample"})
public final class Apds9960ColorSensor<V> extends BuiltinSensor<V> {

    public final Expr<V> r, g, b;

    public Apds9960ColorSensor(BlocklyProperties properties, Expr<V> r, Expr<V> g, Expr<V> b) {
        super(properties, null);
        this.r = r;
        this.g = g;
        this.b = b;
        setReadOnly();
    }

    public static <V> Phrase<V> jaxbToAst(Block block, Jaxb2ProgramAst<V> helper) {
        List<Value> values = Jaxb2Ast.extractValues(block, (short) 3);
        Expr<V> r = helper.getVar(values, BlocklyConstants.VARIABLE_R);
        Expr<V> g = helper.getVar(values, BlocklyConstants.VARIABLE_G);
        Expr<V> b = helper.getVar(values, BlocklyConstants.VARIABLE_B);
        return new Apds9960ColorSensor<>(Jaxb2Ast.extractBlocklyProperties(block), r, g, b);
    }

    @Override
    public Block astToBlock() {
        Block block = new Block();
        Ast2Jaxb.setBasicProperties(this, block);
        Ast2Jaxb.addValue(block, BlocklyConstants.VARIABLE_R, this.r);
        Ast2Jaxb.addValue(block, BlocklyConstants.VARIABLE_G, this.g);
        Ast2Jaxb.addValue(block, BlocklyConstants.VARIABLE_B, this.b);
        return block;
    }
}